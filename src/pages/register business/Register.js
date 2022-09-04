// import { useEffect } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { OfferSliceActions } from '../../store/OfferSlice';
import './Register.css';

// let isSubmit = false;
const Register = () => {

    const dispatch = useDispatch();
    const [getData, setGetData] = useState([]);
    const [isComplete, setIsComplete] = useState(false);

    const isRegister = useSelector(state => state.OfferSliceReducer.isRegister);

    const registerForm = (e) => {
        e.preventDefault();
        setGetData({ owner: e.target[0].value, city: e.target[3].value,state: e.target[2].value });
        dispatch(OfferSliceActions.userRegister());
    }

    const detailsForm = (e) => {
        e.preventDefault();

        const input = document.querySelector('.img_input');
        
        const imgFiles = input.files[0];
        if(imgFiles){
            const fileReader = new FileReader();
            fileReader.readAsDataURL(imgFiles);
            fileReader.addEventListener('load', () => {
                // console.log(fileReader.result);
                setGetData(prevState => {
                    return { ...prevState, userImg: fileReader.result}
                });
            })
        }

        const select = document.querySelector('.category_select');
        setGetData(prevState => {
            return { ...prevState, name: e.target[0].value, category: select.options[select.selectedIndex].text, offer: e.target[2].value, product: e.target[3].value, location: e.target[4].value, discription: e.target[5].value, image: 'offer0', }
        });
        dispatch(OfferSliceActions.userRegister());
        setIsComplete(true);
    }

    useEffect( () => {
        if (isComplete) {
            if(getData.userImg){
                dispatch(OfferSliceActions.addOffer(getData));
            }
        }
    }, [isComplete, dispatch, getData]);





    // const img_preview = document.querySelector('.img_preview');
// const input = document.querySelector('.img_input');
// console.log(img_preview);

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const files = input.files[0];
//     if(files){
//         const fileReader = new FileReader();
//         fileReader.readAsDataURL(files);
//         fileReader.addEventListener('load', () => {
//             console.log(fileReader.result);
//             img_preview.innerHTML = `<img src=" ${fileReader.result}" />`;

//         })
//     }
// })



    return (
        <>
            {!isRegister && !isComplete && <section className='register_business section'>
                <h2>Register Your Business</h2>
                <form onSubmit={registerForm}>
                    <div className="form_input">
                        <label>Enter your name</label>
                        <input type="text" required />
                    </div>
                    <div className="form_input">
                        <label>Phone</label>
                        <input type="number" required />
                    </div>
                    <div className="form_input">
                        <label>state</label>
                        <input type="text" required />
                    </div>
                    <div className="form_input">
                        <label>City</label>
                        <input type="text" required />
                    </div>
                    <div className="form_input">
                        <label>Zip code</label>
                        <input type="number" required />
                    </div>
                    <div className="form_checkbox">
                        <label>Accept terms and conditions</label>
                        <input type="checkbox" required />
                    </div>
                    <button className='register_btn'>Register</button>
                </form>
            </section>}

            {isRegister &&  !isComplete && <section className='offer_info section'>
                <form onSubmit={detailsForm} >
                    <div className="form_input">
                        <label>Enter your shop name</label>
                        <input type="text" required placeholder='your shop name' />
                    </div>
                    <div className="form_input">
                        <label>Category</label>
                        <select className='category_select' name="category">
                            <option value="" disabled>--select--</option>
                            <option value="">fashion</option>
                            <option value="">food</option>
                            <option value="">home</option>
                            <option value="">gym</option>
                            <option value="">sports</option>
                            <option value="">mobile</option>
                            <option value="">electronics</option>
                            <option value="">salon deals</option>
                        </select>
                    </div>
                    <div className="form_input">
                        <label>Enter offer (%)</label>
                        <input type="number" required placeholder='eg - 10%' />
                    </div>
                    <div className="form_input">
                        <label>Offer Product</label>
                        <input type="text" required placeholder='eg - shirt, jeans, meals' />
                    </div>
                    <div className="form_input">
                        <label>Shop Adress(In 2-3 words)</label>
                        <input type="text" required placeholder='eg - model town' />
                    </div>
                    <div className="form_input">
                        <label>Discription</label>
                        <textarea name="discription" cols="30" rows="5" required></textarea>
                    </div>
                    <div className="form_input">
                        <label>Enter your product image</label>
                        <input className='img_input' type="file" required/>
                    </div>
                    <div className="form_checkbox">
                        <label>Accept terms and conditions</label>
                        <input type="checkbox" required />
                    </div>
                    <button className='register_btn'>Submit</button>
                </form>
            </section>}

            {isComplete && <div className="successfull_message">
                <h2>Offer Added🎉🎉</h2>
            </div>}
        </>
    )
};

export default Register;
