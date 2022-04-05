const cart = [];


const handleCart = (state = cart, actions) => {
    const product = actions.payload;
    switch (actions.type) {

        case "ADDITEM":

            const exist = state.find((x) => x.id === product.id);

            if (exist) {
                return state.map((x) => x.id === product.id ? { ...x, qty: x.qty + 1 } : x);
            }else {

                const product = actions.payload;
                return [
                    ...state,
                    {
                        ...product,
                        qty : 1
                    }
                ]
            }

           


        case  "DELITEM":
            const exist1  = state.find((x)=> x.id === product.id);

            if(exist1.qty ===1){
                return state.filter((x) => x.id !== exist1.id);
            }else {
                return state.map((x)=>
                    x.id === product.id ? {...x, qty: x.qty-1} : x
                );
            }

        default:
            return state;
    }

}


export default handleCart;