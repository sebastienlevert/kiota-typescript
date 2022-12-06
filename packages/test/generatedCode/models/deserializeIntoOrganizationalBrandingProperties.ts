import {deserializeIntoEntity} from './deserializeIntoEntity';
import {OrganizationalBrandingProperties} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOrganizationalBrandingProperties(organizationalBrandingProperties: OrganizationalBrandingProperties | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(organizationalBrandingProperties),
        "backgroundColor": n => { organizationalBrandingProperties.backgroundColor = n.getStringValue() as any ; },
        "backgroundImage": n => { organizationalBrandingProperties.backgroundImage = n.getStringValue() as any ; },
        "backgroundImageRelativeUrl": n => { organizationalBrandingProperties.backgroundImageRelativeUrl = n.getStringValue() as any ; },
        "bannerLogo": n => { organizationalBrandingProperties.bannerLogo = n.getStringValue() as any ; },
        "bannerLogoRelativeUrl": n => { organizationalBrandingProperties.bannerLogoRelativeUrl = n.getStringValue() as any ; },
        "cdnList": n => { organizationalBrandingProperties.cdnList = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "signInPageText": n => { organizationalBrandingProperties.signInPageText = n.getStringValue() as any ; },
        "squareLogo": n => { organizationalBrandingProperties.squareLogo = n.getStringValue() as any ; },
        "squareLogoRelativeUrl": n => { organizationalBrandingProperties.squareLogoRelativeUrl = n.getStringValue() as any ; },
        "usernameHintText": n => { organizationalBrandingProperties.usernameHintText = n.getStringValue() as any ; },
    }
}
