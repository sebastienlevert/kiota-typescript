import {AccessPackageCatalogState} from './accessPackageCatalogState';
import {AccessPackageCatalogType} from './accessPackageCatalogType';
import {AccessPackage, Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessPackageCatalog extends Entity, Partial<Parsable> {
    /** The access packages in this catalog. Read-only. Nullable. */
    accessPackages?: AccessPackage[];
    /** Whether the catalog is created by a user or entitlement management. The possible values are: userManaged, serviceDefault, serviceManaged, unknownFutureValue. */
    catalogType?: AccessPackageCatalogType;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    createdDateTime?: Date;
    /** The description of the access package catalog. */
    description?: string;
    /** The display name of the access package catalog. */
    displayName?: string;
    /** Whether the access packages in this catalog can be requested by users outside of the tenant. */
    isExternallyVisible?: boolean;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    modifiedDateTime?: Date;
    /** Has the value published if the access packages are available for management. The possible values are: unpublished, published, unknownFutureValue. */
    state?: AccessPackageCatalogState;
}
