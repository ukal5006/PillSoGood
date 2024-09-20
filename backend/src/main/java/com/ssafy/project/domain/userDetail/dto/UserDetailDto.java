package com.ssafy.project.domain.userDetail.dto;

import com.ssafy.project.domain.user.entity.User;
import com.ssafy.project.domain.userDetail.entity.Gender;
import com.ssafy.project.domain.userDetail.entity.Pregnancy;
import com.ssafy.project.domain.userDetail.entity.UserDetail;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class UserDetailDto {

    private LocalDate birth;
    private double height;
    private double weight;
    private Gender gender;
    private Pregnancy pregnancy;
    private List<String> allergies;
    private String family;

    // 첫 생성
    public UserDetail toEntity(User user) {
        return UserDetail.builder()
                .user(user)
                .birth(this.birth)
                .height(this.height)
                .weight(this.weight)
                .gender(this.gender)
                .pregnancy(this.pregnancy)
                .allergy(String.join(",", this.allergies)) // 알러지 리스트를 문자열로 변환하여 저장
                .family(String.join(",", this.family))
                .build();
    }

    public void updateUserDetail(UserDetail userDetail) {
        if (this.birth != null) {
            userDetail.updateBirth(this.birth);
        }
        if (this.height > 0) {
            userDetail.updateHeight(this.height);
        }
        if (this.weight > 0) {
            userDetail.updateWeight(this.weight);
        }
        if (this.gender != null) {
            userDetail.updateGender(this.gender);
        }
        if (this.pregnancy != null) {
            userDetail.updatePregnancy(this.pregnancy);
        }
        if (this.family != null) {
            userDetail.updateFamily(this.family);
        }

        if (this.allergies != null && !this.allergies.isEmpty()) {
            userDetail.updateAllergies(this.allergies);
        }
    }
}