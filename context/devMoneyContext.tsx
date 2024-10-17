"use client";

import axios from "axios";
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
    const url = "http://localhost:3001/transactions";
    try {
      const response = await axios.get(url);
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
    console.log("Transações:", transactions);
    const accountEntry = transactions.filter((item) => item.type === "entrada");
    const sumEntry = accountEntry.reduce(
      (acc: number, curr: transactionsInterface) => acc + curr.amount,
      0
    );

    const exit = transactions.filter((item) => item.type === "saida");
    console.log("Saídas filtradas:", exit);
    const sumExit = exit.reduce(
      (acc: number, curr: transactionsInterface) => acc + curr.amount,
      0
    );

    settotalEntryIntoTheAccount(sumEntry);
    setTotalExits(sumExit);
    setTotal(sumEntry - sumExit);
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
