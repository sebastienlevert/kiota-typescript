import {AttributeMapping, Filter, MetadataEntry} from './index';
import {ObjectFlowTypes} from './objectFlowTypes';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ObjectMapping extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Attribute mappings define which attributes to map from the source object into the target object and how they should flow. A number of functions are available to support the transformation of the original source values. */
    attributeMappings?: AttributeMapping[];
    /** When true, this object mapping will be processed during synchronization. When false, this object mapping will be skipped. */
    enabled?: boolean;
    /** The flowTypes property */
    flowTypes?: ObjectFlowTypes;
    /** Additional extension properties. Unless mentioned explicitly, metadata values should not be changed. */
    metadata?: MetadataEntry[];
    /** Human-friendly name of the object mapping. */
    name?: string;
    /** The scope property */
    scope?: Filter;
    /** Name of the object in the source directory. Must match the object name from the source directory definition. */
    sourceObjectName?: string;
    /** Name of the object in target directory. Must match the object name from the target directory definition. */
    targetObjectName?: string;
}
