import React from "react";

interface WidgetBarProps {
  setIsReset: (flag: boolean) => void;
}

export const WidgetBar: React.FC<WidgetBarProps> = ({
  setIsReset,
}: WidgetBarProps) => {
  return (
    <div className="bg-white cursor-pointer p-2 shadow-lg font-medium rounded" onClick={() => setIsReset(true)}>
      RESET
    </div>
  );
};
