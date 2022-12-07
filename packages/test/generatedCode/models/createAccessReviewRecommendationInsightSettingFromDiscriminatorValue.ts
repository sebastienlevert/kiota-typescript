import {AccessReviewRecommendationInsightSetting} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewRecommendationInsightSettingFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewRecommendationInsightSetting {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessReviewRecommendationInsightSetting();
}
