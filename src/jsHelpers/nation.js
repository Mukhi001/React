export const nations=(id)=>{
    switch(id){
        case "India":return ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", 
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", 
    "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", 
    "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", 
    "Uttarakhand", "West Bengal"];

    break;

    case "Africa":return [ "Nigeria","Kenya","South Africa","Egypt","Ghana","Ethiopia","Morocco","Uganda","Tanzania","Algeria","Sudan",
        "Angola","Rwanda","Zimbabwe","Senegal","Mozambique", "Côte d'Ivoire", "Botswana", "Mali", "Cameroon", "Zambia", "Namibia"];

        break;

    case "USA":return [ "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", 
        "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", 
        "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", 
        "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", 
        "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", 
        "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", 
        "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];

        break;

        case "UK":return ["England", "Scotland", "Wales", "Northern Ireland"];
        break;

        case "Cuba":return ["Pinar del Río","Artemisa","La Habana","Mayabeque","Matanzas","Cienfuegos","Villa Clara","Sancti Spíritus",
                     "Ciego de Ávila","Camagüey","Las Tunas","Holguín","Granma","Santiago de Cuba","Guantánamo",]

                     break;
    }
    
}