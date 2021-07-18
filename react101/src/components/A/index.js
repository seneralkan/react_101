import React from 'react'
import styles from './styles.module.css'

/* ############ MODULE CSS ################

ayni class name i olan A ve B componentlerinin stilleri farkli olur ise;

sadece birini secer. Bunu onleyen sisteme module Css denir.

Burada stil dosyalarii "sttyles.module.css" olarak kaydedip render edilirken farkli bir id almasi sagliyoruz

Ve, className elementi icerisinde ise className={styles.title} seklinde tanimliyoruz.

Sorun ortadan kalkiyor.

*/

function A() {
    return (
        <div className={styles.title}>
            A
        </div>
    )
}

export default A
