export const formattedPrice = (value) => {
    if (value === undefined || value === null) return '';
    const numberValue = value;
  
    if (isNaN(numberValue)) return '';
  
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(numberValue);
  };

  export const formattedDate = (value) => {
    if (!value) return '';
    
    const date = new Date(value);
  
    if (isNaN(date)) return '';
    
    const monthNames = [
      "Januari", "Februari", "Maret", "April", "Mei", "Juni", 
      "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];
  
    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
  
    return `${day} ${month} ${year}`;
  };
  
  