
const Card = () => {
 return (
  <div className='review-card'>
  {/* review card */}
 <div>
   <img src={`https://i.pravatar.cc/80?img=1`} />
 </div>
 <div>
   <p className='review'>
     ”Simplicity that echoes, a memorable brand identity
     representation.” 1
   </p>
   <p className='reviewer-name'>
     - Albert Flores 1
   </p>
 </div>
</div>
 );
};

export default Card;