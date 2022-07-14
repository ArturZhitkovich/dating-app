function counterFriends(count) {
    const phrase = [' человек тусанет', ' человека тусанут']
    return count + phrase[(count % 100 > 4 && count % 100 < 20) ? 0 : (count % 10 < 5 && count % 10 > 1) ? 1 : 0];
}

export default counterFriends;