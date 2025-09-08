import React from 'react'

function NotificationPanel() {
    return (
        <>
            <br />
            <br />
            <div className='message-unit '>
                <div className='message-content'>
                   <h4>Notification Title</h4> 
                    <p>Description or details</p>
                </div>
                <div className='message-type tag tag-good'>
                    <span className=''>Info</span>
                </div>
            </div>
            <div className='message-unit '>
                <div className='message-content'>
                   <h4>New Student Enrollment</h4> 
                    <p>Achenyu Bk joins Form 3B</p>
                </div>
                <div className='message-type tag tag-good'>
                    <span className=''>Info</span>
                </div>
            </div>
            <div className='message-unit '>
                <div className='message-content'>
                   <h4>Upcoming Meeting</h4> 
                    <p>PTA Meeting today with Uppersixth parents</p>
                </div>
                <div className='message-type tag tag-warning'>
                    <span className=''>Info</span>
                </div>
            </div>
            <div className='message-unit '>
                <div className='message-content'>
                   <h4>Security Updates</h4> 
                    <p>Your system is missing crytical security updates</p>
                </div>
                <div className='message-type tag tag-danger'>
                    <span className=''>Crttical</span>
                </div>
            </div>
        </>
    )
}

export default NotificationPanel
