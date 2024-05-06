// This function formats the current date as DD-MM-YYYY


function getCurrentDateFormatted(): string {
    const now: Date = new Date();
    const day: string = String(now.getDate()).padStart(2, '0');
    const month: string = String(now.getMonth() + 1).padStart(2, '0');
    const year: number = now.getFullYear();
    return `${day}-${month}-${year}`;
  }
  
  console.log(getCurrentDateFormatted());