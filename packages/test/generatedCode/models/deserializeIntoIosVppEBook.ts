import {deserializeIntoManagedEBook} from './deserializeIntoManagedEBook';
import {IosVppEBook} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosVppEBook(iosVppEBook: IosVppEBook | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoManagedEBook(iosVppEBook),
        "appleId": n => { iosVppEBook.appleId = n.getStringValue() as any ; },
        "genres": n => { iosVppEBook.genres = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "language": n => { iosVppEBook.language = n.getStringValue() as any ; },
        "seller": n => { iosVppEBook.seller = n.getStringValue() as any ; },
        "totalLicenseCount": n => { iosVppEBook.totalLicenseCount = n.getNumberValue() as any ; },
        "usedLicenseCount": n => { iosVppEBook.usedLicenseCount = n.getNumberValue() as any ; },
        "vppOrganizationName": n => { iosVppEBook.vppOrganizationName = n.getStringValue() as any ; },
        "vppTokenId": n => { iosVppEBook.vppTokenId = n.getStringValue() as any ; },
    }
}
