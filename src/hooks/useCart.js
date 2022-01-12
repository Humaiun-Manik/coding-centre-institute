import { useEffect, useState } from "react";

const useCart = () => {

    const [selectedCourses, setSelectedCourses] = useState([]);

    useEffect(() => {
        const cart = getCart();
        setSelectedCourses(cart);
    }, [])

    // local stroage
    const getCart = () => {
        let cart;
        const isHave = localStorage.getItem('cart');
        if (isHave) {
            cart = JSON.parse(isHave);
        } else {
            cart = [];
        }
        return cart;
    }

    const addToCart = (course) => {
        const isHave = selectedCourses.find(selected => selected.key === course.key);
        if (isHave) {
            alert('Course has been selected!');
        } else {
            const newSelection = [...selectedCourses, course];
            localStorage.setItem('cart', JSON.stringify(newSelection));
            setSelectedCourses(newSelection);
        }
    }

    const remove = (id) => {
        const selectAfterRemove = selectedCourses.filter(course => course.key !== id);
        localStorage.setItem('cart', JSON.stringify(selectAfterRemove));
        setSelectedCourses(selectAfterRemove);

    }

    return { addToCart, selectedCourses, remove, setSelectedCourses };
};

export default useCart;