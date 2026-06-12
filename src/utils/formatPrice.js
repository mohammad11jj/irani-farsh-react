export function formatPriceWithSeparator(price, separator = '/') {
    let number = Number(price);
    
    if (isNaN(number)) {
        return "0";
    }
    
    // تبدیل به رشته و جدا کردن اعداد
    let parts = number.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    
    return parts.join(".");
}

