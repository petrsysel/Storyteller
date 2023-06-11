interface IItem{
    Name: string;
    Description: string;
    Amount: number;

    GetName(): string;
    GetDescription(): string;
    GetAmount(): number;

    Copy(amount: number): Item;
}