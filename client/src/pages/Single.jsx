import React from "react";

import { Link } from "react-router-dom";
import Menu from "../components/Menu";

import Delete from "../img/delete.png";
import Edit from "../img/edit.png";

const Single = () => {
  return (
    <div className='single-page'>
      <div className='content'>
        <img
          src='https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt='single page'
          srcset=''
        />
        <div className='user'>
          <img
            src='https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt='user'
            srcset=''
          />
          <div className='info'>
            <span>Isaac</span>
            <p>Posted two days ago</p>
          </div>
          <div className='edit'>
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt='edit' srcset='' />
            </Link>
            <img src={Delete} alt='delete' srcset='' />
          </div>
        </div>
        <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </h1>
        <p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat
            mi non sagittis laoreet. Fusce sed bibendum ante. Morbi dapibus
            luctus justo, id auctor lorem maximus vel. Mauris sed blandit quam.
            Aliquam convallis nisl ut diam sollicitudin, ut eleifend quam
            eleifend. Praesent porttitor diam metus, ut tempor tellus maximus
            non. Duis
          </p>
          <p>
            fringilla erat non enim posuere, vel aliquam urna eleifend. Praesent
            quis lacus quis magna feugiat scelerisque. Maecenas scelerisque
            nulla sed pulvinar venenatis. In vehicula luctus neque vel porta.
            Suspendisse ac sem vitae mi lacinia iaculis. Sed bibendum mi ut odio
          </p>
          <p>
            accumsan rutrum. Nunc rhoncus ac est eu tincidunt. Vivamus sed
            tempor nulla. Pellentesque est enim, egestas eu risus eget,
            dignissim egestas ligula. Integer turpis mauris, pulvinar ut
            vehicula in, bibendum eu mi. Maecenas in mauris ut est hendrerit
            imperdiet a ac erat. Nulla pharetra rutrum efficitur. Cras sed
            pretium est, nec auctor erat. Aenean imperdiet euismod est non
            lobortis. Pellentesque faucibus vel
          </p>
          <p>
            leo ac placerat. Nullam pharetra tristique lorem, eget tempus leo
            lacinia id. Vivamus bibendum ante arcu, id feugiat massa fermentum
            quis. Etiam quis vehicula augue. Mauris nec bibendum lectus, nec
            sodales odio. Nam sem odio, scelerisque a augue eu, finibus ornare
            nibh. Duis viverra, diam nec finibus pulvinar, lorem erat sagittis
            quam, in pretium tortor ligula sed purus. Pellentesque posuere dolor
          </p>
          <p>
            vitae odio accumsan porttitor. Duis tincidunt interdum pellentesque.
            Quisque ullamcorper massa leo, sed venenatis nunc hendrerit sed.
            Donec tellus metus, eleifend ut leo id, posuere commodo leo. Morbi
            finibus accumsan tristique. Pellentesque dapibus diam id lacus
            gravida, sed varius arcu gravida. Fusce tempor, odio et ornare
            malesuada, lorem neque eleifend felis, quis tincidunt augue sapien
            at metus. Suspendisse molestie diam nisl, at efficitur quam bibendum
            quis. Maecenas eu eros sollicitudin, semper mi nec, ullamcorper
            quam. Nullam euismod interdum felis sit amet placerat. Fusce
            placerat interdum dui quis vestibulum. Pellentesque mi arcu,
            sollicitudin vel vulputate non, pretium luctus mi. Nam luctus nec
            sem ac maximus. Suspendisse potenti.
          </p>
          <p>
            Fusce sed viverra est. Mauris vitae faucibus nibh, semper bibendum
            erat. Vivamus facilisis quam diam, sed iaculis nunc hendrerit vel.
            Nulla facilisi. Mauris aliquam ullamcorper tempus. Phasellus ut ante
            consectetur erat molestie gravida. Sed pulvinar posuere felis, quis
            egestas erat aliquam vitae. Ut at felis vel felis laoreet semper
            finibus vel ipsum. In rutrum tristique ante, non ullamcorper sapien
          </p>
          <p>
            condimentum nec. Curabitur vitae velit quis lorem iaculis porttitor.
            Mauris vel volutpat tortor. Praesent quis posuere justo, quis dictum
            dui. Duis porttitor mi id ligula congue, at facilisis nisi
            vestibulum. In quis vehicula lectus. Cras facilisis pulvinar erat,
            sed finibus ligula feugiat vel. Cras ligula odio, vestibulum eget
            dui rutrum, ullamcorper gravida lorem.
          </p>
        </p>
      </div>
      <div className='menu'>
        <Menu />
      </div>
    </div>
  );
};

export default Single;
