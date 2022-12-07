import {Entity, ResourceReference, ResourceVisualization, SharingDetail} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SharedInsight extends Entity, Partial<Parsable> {
    /** The lastShared property */
    lastShared?: SharingDetail;
    /** The lastSharedMethod property */
    lastSharedMethod?: Entity;
    /** The resource property */
    resource?: Entity;
    /** The resourceReference property */
    resourceReference?: ResourceReference;
    /** The resourceVisualization property */
    resourceVisualization?: ResourceVisualization;
    /** The sharingHistory property */
    sharingHistory?: SharingDetail[];
}
