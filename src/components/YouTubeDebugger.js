// Code YouTubeDebugger Component Here

import React, {Component} from 'react'

export default class YouTubeDebugger extends Component {
    constructor (){ 
        super()

       this.state = {
           errors: [],
           user: null,
           settings: {
               bitrate: 8, 
               video: {
                   resolution: '1080p'
               }
           }
       }
    }

    handleBitClick = () => {
        this.setState( {
          settings: {
              ...this.state.settings,
            bitrate: 12
          }
        })
      }

    handleResClick = () => {
        this.setState( {
            settings: {
                ...this.state.settings,
                video: {
                  resolution: '720p'
                }
            }
          })
    }

    render (){
        //console.log(this.props)
        //console.log(this.state.settings.bitrate)
        console.log(this.state.settings.video.resolution)
        return (
            <div>
                <button className='bitrate' onClick={this.handleBitClick}>Bitrate: {this.state.settings.bitrate}</button>
                <button className='resolution' onClick={this.handleResClick}>Resolution: {this.state.settings.video.resolution}</button>
            </div>
        )
    }

}