import Badge from "../components/Badge"

function BadgeDemo(){



return(

<div>
<Badge text="Default Badge" variant="positive" iconBefore="ri-check-line" iconAfter="ri-asterisk"/>
    <Badge text="Default Badge" variant="negative" iconBefore="ri-asterisk" iconAfter="ri-asterisk"/>
    <Badge text="Default Badge" iconBefore="ri-asterisk" iconAfter="ri-asterisk"/>
</div>




)



}

export default BadgeDemo