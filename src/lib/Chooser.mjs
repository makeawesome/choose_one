class Chooser {
    initChoice(items) {
        return (items || []).map(item => {
            item.choosen = false;
            item.rejected = false;
            return item;
        });
    }

    chooseOne(items, id) {
        return (items || []).map(item => {
            item.choosen = (item.id === id);
            return item;
        });
    }

    rejectOne(items, id) {
        return (items || []).map(item => {
            if (item.id === id) {
                item.rejected = true;
            }
            return item;
        });
    }

    restoreOne(items, id) {
        return (items || []).map(item => {
            if (item.id === id) {
                item.rejected = false;
            }
            return item;
        });
    }
}

export default Chooser;