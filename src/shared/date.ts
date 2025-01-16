export const formattedDate = (dateString: string, keepUTC: boolean = false) => {
    const date = new Date(dateString);
  
    const adjustedDate = keepUTC
      ? new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds())
      : date;
  
    return `${adjustedDate.getDate().toString().padStart(2, '0')}/${
      (adjustedDate.getMonth() + 1).toString().padStart(2, '0')
    }/${adjustedDate.getFullYear()} ${adjustedDate.getHours().toString().padStart(2, '0')}:${
      adjustedDate.getMinutes().toString().padStart(2, '0')
    }:${adjustedDate.getSeconds().toString().padStart(2, '0')}`;
  };
  