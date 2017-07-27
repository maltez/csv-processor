const Math =  {
    increment (num, incrementStep = 1) {
        if (typeof num !== 'number'){
            throw new Error('Input parameter is not a number');
        }
        return num + incrementStep;
    },
    decrement (num, incrementStep = 1) {
        const res = num - incrementStep;
        return res > 0 ? res : 0;
    },
};

export default Math;
