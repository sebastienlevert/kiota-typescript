import {AttributeFlowBehavior} from './attributeFlowBehavior';
import {AttributeFlowType} from './attributeFlowType';
import {AttributeMappingSource} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AttributeMapping extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Default value to be used in case the source property was evaluated to null. Optional. */
    defaultValue?: string;
    /** For internal use only. */
    exportMissingReferences?: boolean;
    /** The flowBehavior property */
    flowBehavior?: AttributeFlowBehavior;
    /** The flowType property */
    flowType?: AttributeFlowType;
    /** If higher than 0, this attribute will be used to perform an initial match of the objects between source and target directories. The synchronization engine will try to find the matching object using attribute with lowest value of matching priority first. If not found, the attribute with the next matching priority will be used, and so on a until match is found or no more matching attributes are left. Only attributes that are expected to have unique values, such as email, should be used as matching attributes. */
    matchingPriority?: number;
    /** The source property */
    source?: AttributeMappingSource;
    /** Name of the attribute on the target object. */
    targetAttributeName?: string;
}
