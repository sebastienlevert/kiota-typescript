import {DirectoryObject, Entity} from './index';
import {StagedFeatureName} from './stagedFeatureName';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface FeatureRolloutPolicy extends Entity, Partial<Parsable> {
    /** Nullable. Specifies a list of directoryObjects that feature is enabled for. */
    appliesTo?: DirectoryObject[];
    /** A description for this feature rollout policy. */
    description?: string;
    /** The display name for this  feature rollout policy. */
    displayName?: string;
    /** The feature property */
    feature?: StagedFeatureName;
    /** Indicates whether this feature rollout policy should be applied to the entire organization. */
    isAppliedToOrganization?: boolean;
    /** Indicates whether the feature rollout is enabled. */
    isEnabled?: boolean;
}
