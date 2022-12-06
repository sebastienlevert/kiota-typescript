import {deserializeIntoImplicitGrantSettings} from './deserializeIntoImplicitGrantSettings';
import {deserializeIntoRedirectUriSettings} from './deserializeIntoRedirectUriSettings';
import {WebApplication} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWebApplication(webApplication: WebApplication | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "homePageUrl": n => { webApplication.homePageUrl = n.getStringValue() as any ; },
        "implicitGrantSettings": n => { webApplication.implicitGrantSettings = n.getObject(deserializeIntoImplicitGrantSettings) as any ; },
        "logoutUrl": n => { webApplication.logoutUrl = n.getStringValue() as any ; },
        "@odata.type": n => { webApplication.odataType = n.getStringValue() as any ; },
        "redirectUris": n => { webApplication.redirectUris = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "redirectUriSettings": n => { webApplication.redirectUriSettings = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRedirectUriSettings) as any ; },
    }
}
