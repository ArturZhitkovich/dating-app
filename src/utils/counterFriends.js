function counterFriends(count) {
    const phrase = [' человек тусанет', ' человека тусанут', ' человек тусанет']
    let cases = [2, 0, 1, 1, 1, 2];
    return count
        ? count + phrase[(count % 100 > 4 && count % 100 < 20) ? 2 : cases[(count % 10 < 5) ? count % 10 : 5]] + ' с тобой сегодня'
        : 'Никто не тусанет с тобой ';
}

export default counterFriends;