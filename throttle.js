function throttle(f, time) {
    let shouldwait = false
    return function (...args) {
        let obj = this
        if (shouldwait) return;
        f.apply(obj, args);
        shouldwait = true;
        setTimeout(() => {
                shouldwait = false;
            },
            time);
    };
}


function opThrottle(f, time, set = {
    leading: false,
    trailing: false
}) {
    let shouldwait = false;
    let waiting = null;

    return function (...args) {
        const obj = this;

        if (!shouldwait) {
            if (set.leading) {
                f.apply(obj, args);
            }
            shouldwait = true;
            setTimeout(() => {
                shouldwait = false;
                if (waiting && set.trailing) {
                    f.apply(obj, waiting);
                    waiting = null;
                    shouldwait = true;
                    setTimeout(() => {
                        shouldwait = false;
                    }, time);
                }
            }, time);
        } else if (set.trailing) {
            waiting = args;
        }
    };
}