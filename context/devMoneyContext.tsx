"use client";

import axios from "axios";
import { createContext, useEffect, useState } from "react";

interface ContextInterface {
  transitions: TransitionsInterface[];
  totalEntryIntoTheAccount: number;
  totalExits: number;
  total: number;
  setTransitions: (trans: TransitionsInterface[]) => void;
}

interface TransitionsInterface {
  id: string;
  description: string;
  type: "entrada" | "saida";
  amount: number;
  category: string;
  createdAt: string;
}

export const DevMoneyContext = createContext({} as ContextInterface);

export default function DevMoneyContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [transitions, setTransitions] = useState<TransitionsInterface[]>([]);
  const [totalEntryIntoTheAccount, settotalEntryIntoTheAccount] =
    useState<number>(0);
  const [totalExits, setTotalExits] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  async function GetDevMoney() {
    const url = "http://localhost:3001/transsactions";
    try {
      const response = await axios.get(url);
      const data = await response.data;
      setTransitions(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    GetDevMoney();
  }, []);

  useEffect(() => {
    console.log("Transações:", transitions);
    const accountEntry = transitions.filter((item) => item.type === "entrada");
    const sumEntry = accountEntry.reduce(
      (acc: number, curr: TransitionsInterface) => acc + curr.amount,
      0
    );

    const exit = transitions.filter((item) => item.type === "saida");
    console.log("Saídas filtradas:", exit);
    const sumExit = exit.reduce(
      (acc: number, curr: TransitionsInterface) => acc + curr.amount,
      0
    );

    settotalEntryIntoTheAccount(sumEntry);
    setTotalExits(sumExit);
    setTotal(sumEntry - sumExit);
  }, [transitions]);

  return (
    <DevMoneyContext.Provider
      value={{
        transitions,
        setTransitions,
        totalEntryIntoTheAccount,
        totalExits,
        total,
      }}
    >
      {children}
    </DevMoneyContext.Provider>
  );
}
