import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TermsAndCondition = () => {
    return (
        <div>
            <h2>TERMS AND CONDITIONS</h2>
            <p>
                Welcome to RK News! <br /><br />

                These Terms and Conditions ("Terms") govern your use of our website. By accessing or using the Site, you agree to be bound by these Terms, our Privacy Policy, and any additional terms that may apply to specific sections of the Site or to products and services available through the Site. If you do not agree to these Terms, please do not use the Site. <br /><br />

                1. USE OF SITE CONTENT<br />

                The content of the Site, including but not limited to text, graphics, images, videos, and software, is owned or licensed by RK News and is protected by copyright, trademark, and other intellectual property laws. You may not modify, publish, transmit, participate in the transfer or sale of, reproduce, create derivative works based on, distribute, or display any content on the Site in whole or in part without our prior written permission. You may download and print a single copy of content for your personal, non-commercial use, provided that you do not remove any copyright or other proprietary notices.<br /><br />

                2. USER CONTENT<br />

                By posting, submitting, or transmitting any content on the Site, including but not limited to comments, articles, or user-generated content, you grant RK News a non-exclusive, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content throughout the world in any media. You represent and warrant that you own or otherwise control all of the rights to the content that you post; that the content is accurate; that use of the content you supply does not violate these Terms and will not cause injury to any person or entity; and that you will indemnify RK News for all claims resulting from content you supply.<br /><br />

                3. USER CONDUCT<br />
                You agree to use the Site only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the Site. You must not use the Site in any way that causes, or may cause, damage to the Site or impairment of the availability or accessibility of the Site. You must not engage in any activity that interferes with or disrupts the Site or the servers and networks used in the operation of the Site. You must not attempt to gain unauthorized access to any part of the Site, or any server, computer, or database connected to the Site.

                4. DISCLAIMER OF WARRANTIES<br />
                The content on the Site is provided "as is" without warranties of any kind, either express or implied, including, but not limited to, implied warranties of merchantability and fitness for a particular purpose. RK News does not warrant that the Site will be uninterrupted or error-free, that defects will be corrected, or that the Site or the server that makes it available are free of viruses or other harmful components.<br /><br />

                5. LIMITATION OF LIABILITY<br />
                RK News shall not be liable for any direct, indirect, incidental, special, or consequential damages that result from the use of or inability to use the Site or any content on the Site. This includes, but is not limited to, damages for loss of profits, use, data, or other intangibles.<br /><br />

                6. INDEMNIFICATION<br />
                You agree to indemnify, defend, and hold harmless RK News and its affiliates, officers, directors, employees, and agents from and against any claims, actions, demands, liabilities, and settlements, including without limitation reasonable legal and accounting fees, resulting from, or alleged to result from, your use of the Site or your violation of these Terms.<br /><br />

                7. MODIFICATIONS TO TERMS<br />

                RK News reserves the right to modify these Terms at any time and without prior notice. Your continued use
            </p>
            <Button variant='primary' ><Link to='/register' className='text-white text-decoration-none'>Back To Register</Link></Button>
        </div>
    );
};

export default TermsAndCondition;