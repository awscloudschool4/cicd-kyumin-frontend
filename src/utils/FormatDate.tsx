import React from "react";
import { format } from "date-fns";

export const FormatDate = (dateString: string) => {
  return format(new Date(dateString), "yyyy.MM.dd");
};
