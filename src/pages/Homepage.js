import './Homepagestyle.css';
import Header from '../components/Header';
import hands from '../components/images/Vector.png'
import frame5 from '../components/images/Frame5.png'
import img1 from '../components/images/img1.png'
import img2 from '../components/images/img2.png'
import img3 from '../components/images/img3.png'
import img4 from '../components/images/img4.png'


const Homepage = () => {


    return (
        <div className="homepage-bg">
            <Header />
            <div className='section-one'>
                <h2 id='htwo'>No Limits</h2>
                <img src={hands} alt='hands'  />
                <p>
                    This is your friend who scores the hottest tables in town, your passport to weekend getaways, 
                    and your guest pass to must-see events. All brilliantly brought together in a card and app of 
                    uncompromising beauty and utility. This is the beginning of a journey to a world with no limits.
                </p>
                <p>
                    This is your friend who scores the hottest tables in town, your passport to weekend getaways, 
                    and your guest pass to must-see events. All brilliantly brought together in a card and app of 
                    uncompromising beauty and utility. This is the beginning of a journey to a world with no limits.
                </p>
                <h2>
                    This is Atlas
                </h2>
            </div>

            <div className='section-two'>
                <h1>
                    Taste Maker
                </h1>
                <h2>
                    Meet Atlas Supper Club.
                </h2>
                <p>
                    Skip past the endless waitlists and concierge calls that turn up empty handed. With Atlas, 
                    you have a seat at the table at today's most desirable restaurants.
                </p>
                <div className='card'>
                    <span id='card-top'>
                        <h4>Horses</h4>
                        <button>COMFIRMED</button>
                    </span>
                    <img src={frame5} alt='frame5'/>
                    <h4 style={{marginBottom:'2px'}}>Party of 2 at 8:00 pm</h4>
                    <p style={{
                        fontSize:'12px', textAlign:'left', marginLeft:'0', color:'rgba(148, 148, 148, 1)'}}
                    >
                        TUESDAY, MAY 16TH
                    </p>
                </div>
                <div className='nxt-card'></div>
                <div className='nxtt-card'></div>
            </div>

            <div className='section-three'>
                <div className='tble'>
                    <h2 className='tble-lft'> Dedicated reservations¹ </h2>
                    <p className='tble-rt'> Access exclusive inventory at our restaurant partners including – 
                        Horses, Felix Trattoria, Cucina Alba, and more. 
                    </p>
                </div> 
                <div className='tble'>
                    <h2 className='tble-lft'> Last-minute bookings² </h2>
                    <p className='tble-rt'>  
                        With bookings available at short notice, you won't find yourself on a waitlist. 
                    </p>
                </div>
                <div className='tble'>
                    <h2 className='tble-lft'> Access during peak hours</h2>
                    <p className='tble-rt'> 
                        Members get seated at prime time, when availability is typically the hardest to get. 
                    </p>
                </div>

                <div className='img-sec'>
                    <img src={img1} alt='img1' id='img1'/><p>HORSES, LA, ON ATLAS SUPPER CLUB.</p>
                    <span style={{display:'flex', justifyContent:'space-between', gap:'20px'}}>
                        <span>
                            <img src={img2} alt='img2' className='img2-3'/>
                            <p>FELIX TRATTORIA, LA, ON ATLAS SUPPER CLUB.</p>
                        </span>
                        <span>
                            <img src={img3} alt='img3' className='img2-3'/>
                            <p>CUCINA ALBA, NYC, ON ATLAS SUPPER CLUB.</p>
                        </span>
                    </span>
                </div>
            </div>

            <div className='section-4'>
                <div className='sec-4'>
                    <h1> High Flyer</h1>
                    <h2>Built for (spontaneous) travel.</h2>
                    <p>
                        No matter where your next grand tour takes you, Atlas is there as your co-pilot, 
                        with bespoke flight benefits for when you're ready to go on the spur of the moment.
                    </p>
                </div>
            </div>
            
            <img src={img4} alt='img4' id='mdd'/>

            <div className='section-5'>
                <div className='sec-5'>
                    <div className='card' id='card3'>
                        <span id='card-top'>
                            <h4>FISHES</h4>
                            <button>PENDING</button>
                        </span>
                        <img src={frame5} alt='frame5'/>
                        <h4 style={{marginBottom:'2px'}}>Party of 4 at 12:00 pm</h4>
                        <p style={{
                            fontSize:'12px', textAlign:'left', marginLeft:'0', color:'rgba(148, 148, 148, 1)'}}
                        >
                            MONDAY, JUNE 14TH
                        </p>
                    </div>
                    
                    <div className='card' id='card2'>
                        <span id='card-top'>
                            <h4>Horses</h4>
                            <button>COMFIRMED</button>
                        </span>
                        <img src={frame5} alt='frame5'/>
                        <h4 style={{marginBottom:'2px'}}>Party of 2 at 8:00 pm</h4>
                        <p style={{
                            fontSize:'12px', textAlign:'left', marginLeft:'0', color:'rgba(148, 148, 148, 1)'}}
                        >
                            TUESDAY, MAY 16TH
                        </p>
                    </div>
                    
                    <div className='card' id='card4'>
                        <span id='card-top'>
                            <h4>ORANGES</h4>
                            <button>COMFIRMED</button>
                        </span>
                        <img src={frame5} alt='frame5'/>
                        <h4 style={{marginBottom:'2px'}}>Party of 1 at 4:00 pm</h4>
                        <p style={{
                            fontSize:'12px', textAlign:'left', marginLeft:'0', color:'rgba(148, 148, 148, 1)'}}
                        >
                            SATURDAY, AUGUST 20TH
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Homepage;