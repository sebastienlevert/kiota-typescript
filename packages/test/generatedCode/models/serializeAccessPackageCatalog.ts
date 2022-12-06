import {AccessPackageCatalogState} from './accessPackageCatalogState';
import {AccessPackageCatalogType} from './accessPackageCatalogType';
import {AccessPackageCatalog} from './index';
import {serializeAccessPackage} from './serializeAccessPackage';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessPackageCatalog(writer: SerializationWriter, accessPackageCatalog: AccessPackageCatalog | undefined = {}) : void {
        serializeEntity(writer, accessPackageCatalog)
            writer.writeCollectionOfObjectValuesFromMethod("accessPackages", accessPackageCatalog.accessPackages as any, serializeAccessPackage);
            writer.writeEnumValue<AccessPackageCatalogType>("catalogType", accessPackageCatalog.catalogType);
            writer.writeDateValue("createdDateTime", accessPackageCatalog.createdDateTime);
            writer.writeStringValue("description", accessPackageCatalog.description);
            writer.writeStringValue("displayName", accessPackageCatalog.displayName);
            writer.writeBooleanValue("isExternallyVisible", accessPackageCatalog.isExternallyVisible);
            writer.writeDateValue("modifiedDateTime", accessPackageCatalog.modifiedDateTime);
            writer.writeEnumValue<AccessPackageCatalogState>("state", accessPackageCatalog.state);
}
