"use client";

import { api } from "@/lib/axios";
import { createContext, useEffect, useState } from "react";

export interface transactionsInterface {
  id: string;
  description: string;
  type: "entrada" | "saida";
  amount: number;
  category: string;
  createdAt: string;
}

interface ContextInterface {
  transactions: transactionsInterface[];
  totalEntryIntoTheAccount: number;
  totalExits: number;
  total: number;
  setTransactions: (trans: transactionsInterface[]) => void;
}

export const DevMoneyContext = createContext({} as ContextInterface);

export default function DevMoneyContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [transactions, setTransactions] = useState<transactionsInterface[]>([]);
  const [totalEntryIntoTheAccount, settotalEntryIntoTheAccount] =
    useState<number>(0);
  const [totalExits, setTotalExits] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  async function GetDevMoney() {
    try {
      const response = await api.get("/transactios");
      const data = await response.data;
      setTransactions(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    GetDevMoney();
  }, []);

  useEffect(() => {
    const accountEntry = transactions.filter((item) => item.type === "entrada");
    const sumEntry = accountEntry.reduce(
      (acc: number, curr: transactionsInterface) => acc + Number(curr.amount),
      0
    );

    const exit = transactions.filter((item) => item.type === "saida");

    const sumExit = exit.reduce(
      (acc: number, curr: transactionsInterface) => acc + Number(curr.amount),
      0
    );

    settotalEntryIntoTheAccount(sumEntry);
    setTotalExits(sumExit);
    setTotal(Math.round((sumEntry - sumExit) * 100) / 100);
  }, [transactions]);

  return (
    <DevMoneyContext.Provider
      value={{
        transactions,
        setTransactions,
        totalEntryIntoTheAccount,
        totalExits,
        total,
      }}
    >
      {children}
    </DevMoneyContext.Provider>
  );
}
