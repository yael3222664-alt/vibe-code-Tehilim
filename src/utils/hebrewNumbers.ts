// המרת מספר לאותיות עבריות
export function numberToHebrewOrdinal(num: number): string {
  const ones = ['', 'א׳', 'ב׳', 'ג׳', 'ד׳', 'ה׳', 'ו׳', 'ז׳', 'ח׳', 'ט׳'];
  const tens = ['', 'י׳', 'כ׳', 'ל׳', 'מ׳', 'נ׳', 'ס׳', 'ע׳', 'פ׳', 'צ׳'];
  const hundreds = ['', 'ק׳', 'ר׳'];
  
  if (num === 15) return 'ט״ו';
  if (num === 16) return 'ט״ז';
  
  let result = '';
  let n = num;
  
  if (n >= 100) {
    result += hundreds[Math.floor(n / 100)].replace('׳', '');
    n %= 100;
  }
  
  if (n >= 10) {
    result += tens[Math.floor(n / 10)].replace('׳', '');
    n %= 10;
  }
  
  if (n > 0) {
    result += ones[n].replace('׳', '');
  }
  
  // הוספת גרשיים לפני האות האחרונה
  if (result.length > 1) {
    result = result.slice(0, -1) + '״' + result.slice(-1);
  } else if (result.length === 1) {
    result += '׳';
  }
  
  return result;
}
