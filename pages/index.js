
import Layout from '../components/Layout'
import UltimateRoot from '../components/hocs/ultimateRoot'

const Home = () => (
    <div className="center-align" style={{ marginTop: '200px' }}>
      <h3>Welcome</h3>
      <p>Check out these awesome features</p>
    </div>
)

export default UltimateRoot(Home)