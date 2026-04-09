import { drawerData } from '../../config/data'
import styles from './drawer.module.scss'

const Drawer = () => {
  return (
    <div className={styles.drawer}>
      {drawerData.map((item, index) => (
        <div key={index} className={styles.drawerItem}>
          {item.title}
        </div>
      ))}
    </div>
  )
}

export default Drawer
