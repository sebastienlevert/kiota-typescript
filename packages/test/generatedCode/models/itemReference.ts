import {SharepointIds} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ItemReference extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Unique identifier of the drive instance that contains the item. Read-only. */
    driveId?: string;
    /** Identifies the type of drive. See [drive][] resource for values. */
    driveType?: string;
    /** Unique identifier of the item in the drive. Read-only. */
    id?: string;
    /** The name of the item being referenced. Read-only. */
    name?: string;
    /** Path that can be used to navigate to the item. Read-only. */
    path?: string;
    /** A unique identifier for a shared resource that can be accessed via the [Shares][] API. */
    shareId?: string;
    /** The sharepointIds property */
    sharepointIds?: SharepointIds;
    /** For OneDrive for Business and SharePoint, this property represents the ID of the site that contains the parent document library of the driveItem resource. The value is the same as the id property of that [site][] resource. It is an opaque string that consists of three identifiers of the site. For OneDrive, this property is not populated. */
    siteId?: string;
}
