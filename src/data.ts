
export enum ReportType {
  INCOME = 'income',
  EXPENSE = 'expense',
}

export const data: Data = {
  report: [
    {
      id: "uuid1",
      source: "facebook",
      amount: 3000,
      created_at: new Date,
      updated_at: new Date,
      type: ReportType.EXPENSE,
    },
    {
      id: "uuid2",
      source: "youtube",
      amount: 7000,
      created_at: new Date,
      updated_at: new Date,
      type: ReportType.EXPENSE,
    },
    {
      id: "uuid3",
      source: "google",
      amount: 9000,
      created_at: new Date,
      updated_at: new Date,
      type: ReportType.INCOME,
    },
  ],
};

interface Data {
  report: {
    id: string;
    source: string;
    amount: number;
    created_at: Date;
    updated_at: Date;
    type: ReportType;
  }[];
}

