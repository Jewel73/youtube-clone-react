import React from 'react'
import '../css/searchpage.css'
import ChannelRow from './ChannelRow'
import SearchVideoRow from './SearchVideoRow'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined'
function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr/>

            <ChannelRow 
                image="https://yt3.ggpht.com/a-/AOh14GiGpNUkPFcrBW33qW87cVqtEKJriSok7CN4GRWK5Q=s88-c-k-c0xffffffff-no-rj-mo"
                channel="Zovan Vlog"
                verified
                subs= "8.2k"
                noOfVideos = {382}
                description="You can find awsome vlog from this youtube channel, all are reserverd "
            />
            <hr/>
            <SearchVideoRow 
                subs="22k"
                title = "Become Web Developer In 10 Minitues | 2019/20"
                views = "2.3M Views"
                timestamp="3 days ago"
                channel = "Tawhid Afridi"
                image = "https://homepages.cae.wisc.edu/~ece533/images/pool.png"
                description="You can find awsome vlog from this youtube channel, all are reserverd "

            />

            <SearchVideoRow 
                subs="1.5M"
                title = "Become Web Developer In 10 Minitues | 2019/20"
                views = "2.3M Views"
                timestamp="3 days ago"
                channel = "Zovan Vlog"
                description="What do you wnat to be successful in your life? You can find awsome vlog from this youtube channel, all are reserverd "
                image = "https://homepages.cae.wisc.edu/~ece533/images/girl.png"
            />

             <SearchVideoRow 
                subs="1.5M"
                title = "Become Web Developer In 10 Minitues | 2019/20"
                views = "2.3M Views"
                timestamp="3 days ago"
                channel = "Zovan Vlog"
                description="You can find awsome vlog from this youtube channel, all are reserverd "
                image = "https://homepages.cae.wisc.edu/~ece533/images/cat.png"
            />

             <SearchVideoRow 
                subs="1M"
                title = "You Will never find a person like me ?"
                views = "1.3M Views"
                timestamp="3 days ago"
                channel = "Sad Story"
                description="Peopole will never will know the hard work behind success.You can find awsome vlog from this youtube channel, all are reserverd "
                image = "https://homepages.cae.wisc.edu/~ece533/images/girl.png"
            />

             <SearchVideoRow 
                subs="1.5M"
                title = "Become Web Developer In 10 Minitues | 2019/20"
                views = "2.3M Views"
                timestamp="3 days ago"
                channel = "Zovan Vlog"
                description="You can find awsome vlog from this youtube channel, all are reserverd "
                image = "https://homepages.cae.wisc.edu/~ece533/images/girl.png"
            />
        </div>
    )
}

export default SearchPage
