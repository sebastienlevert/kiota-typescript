import {AccessPackageCatalogState} from './accessPackageCatalogState';
import {AccessPackageCatalogType} from './accessPackageCatalogType';
import {deserializeIntoAccessPackage} from './deserializeIntoAccessPackage';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {AccessPackageCatalog} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageCatalog(accessPackageCatalog: AccessPackageCatalog | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(accessPackageCatalog),
        "accessPackages": n => { accessPackageCatalog.accessPackages = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAccessPackage) as any ; },
        "catalogType": n => { accessPackageCatalog.catalogType = n.getEnumValue<AccessPackageCatalogType>(AccessPackageCatalogType) as any ; },
        "createdDateTime": n => { accessPackageCatalog.createdDateTime = n.getDateValue() as any ; },
        "description": n => { accessPackageCatalog.description = n.getStringValue() as any ; },
        "displayName": n => { accessPackageCatalog.displayName = n.getStringValue() as any ; },
        "isExternallyVisible": n => { accessPackageCatalog.isExternallyVisible = n.getBooleanValue() as any ; },
        "modifiedDateTime": n => { accessPackageCatalog.modifiedDateTime = n.getDateValue() as any ; },
        "state": n => { accessPackageCatalog.state = n.getEnumValue<AccessPackageCatalogState>(AccessPackageCatalogState) as any ; },
    }
}
