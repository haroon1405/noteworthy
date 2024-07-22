const truncateText = (text, limit) => {
    const words = text.split(' ');
    return words.length > limit ? words.slice(0, limit).join(' ') + ' ...' : text;
};

const formatDateTime = (isoString) => {
    const date = new Date(isoString);
    
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(2);
    
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    
    const formattedDate = `${day}/${month}/${year}`
    const formattedTime = `${hours}:${minutes}`
    
    return [formattedDate, formattedTime];
}

export {truncateText,formatDateTime}