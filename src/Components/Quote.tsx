import { IQuoteInfo } from "../models";

interface QuoteProps {
    quote: IQuoteInfo
}

export function Quote({ quote }: QuoteProps) {
    return (
        <div>{quote.name}</div>
    );
}