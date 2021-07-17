//******************** NOTLAR ********************** */
// App.js de elementleri belirlerdikten sonra burada kullanim detyalari belirtebiliriz.
// Bu yapiya props yapsini deniyor.

// Dongu islemlerinde benzersiz bir key prop belirlememiz gerekmektedir.
// Asil sebep ise performans kaybi yasanmadan yazdirabilmek icin

import PropTypes from 'prop-types';

function User({name, surname, isLoggedIn, age, friends, address}){
    
    if (!isLoggedIn){
        return <div>"Giris yapiniz."</div>
    }
    
    return (
    <>    
    <h1>
        {`${name} ${surname} (${age})`}
    </h1>
    {address.title} {address.zip}
    <br/> <br/>
    {friends && 
    friends.map((friend, index) => (
        <div key ={index}> {index} - {friend}</div>    
    ))}
    </>
    );
};


// Elementlerin Proptypelari ve gerekliliklerini belirtiyoruz.
// Ayrica oneOfType ile birden fazla type alabilecek olan elemntler de belirleniyor.
// shape ile de obje olarak belirlenen elemnetin tiplerini belirlemek icin kullaniyoruz.
// Herhangi bir tanim yapilmamis bir elementin tipini default olarak belirleyebiliyoruz.

User.propTypes ={
    name : PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    friends: PropTypes.array.isRequired,
    address: PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number
    })
}

User.defaultProps = {
    name: "Isim  giriniz",
    surname: "Soyisim giriniz",
    isLoggedIn: false,
};
export default User;