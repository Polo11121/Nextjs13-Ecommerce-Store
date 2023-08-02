import { MountingProvider } from "@/providers/MountingProvider";
import { formatter } from "@/lib/utils";

interface CurrencyProps {
  value: string | number;
}

export const Currency = ({ value }: CurrencyProps) => (
  <MountingProvider>
    <div className="font-semibold">{formatter.format(Number(value))}</div>
  </MountingProvider>
);
