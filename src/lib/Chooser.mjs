class Chooser {
    initChoice(items) {
        return (items || []).map(item => {
            item.choosen = false;
            item.rejected = false;

            if (item.hasOwnProperty('shops')) {
                this.initChoice(item.shops);
            }

            return item;
        });
    }

    chooseOneRandomly(items) {
        const notChoosedItems = (items || []).filter(item => {
            return !(item.choosen || item.rejected);
        });

        let randomIndex = Math.floor(Math.random() * notChoosedItems.length);

        return notChoosedItems[randomIndex] || {};
    }

    chooseOne(items, id) {
        return (items || []).find(item => item.id === id);
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