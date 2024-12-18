package com.ssafy.project.domain.userMedication.entity;

import com.ssafy.project.domain.notification.entity.Notifications;
import com.ssafy.project.domain.userDetail.entity.UserDetail;
import com.ssafy.project.domain.userMedicationDetail.entity.UserMedicationDetail;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Builder
@ToString
public class UserMedication {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "name", nullable = false)
    private String name;

    @Enumerated(value = EnumType.STRING)
    @Column(name = "is_take", nullable = false)
    private Status status;

    @Column(name = "intake_at")
    private LocalDateTime intakeAt;

    @Column(name = "prescription_day")
    private int prescriptionDay;

    @Column(name = "hospital_name")
    private String hospitalName;

    @Column(name = "pharmacy_name")
    private String pharmacyName;

    @Column(name = "total_count")
    private Integer totalCount;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_detail_id", nullable = false)
    private UserDetail userDetail;

    // UserMedicationDetail과의 관계 설정
    @OneToMany(mappedBy = "userMedication", fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    private List<UserMedicationDetail> userMedicationDetailList;

    @OneToMany(mappedBy = "userMedication", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Notifications> notificationsList;

    public void update(String name, Status status, LocalDateTime intakeAt, int prescriptionDay, String hospitalName, String pharmacyName) {
        this.status = status;
        this.name = name;
        this.intakeAt = intakeAt;
        this.prescriptionDay = prescriptionDay;
        this.hospitalName = hospitalName;
        this.pharmacyName = pharmacyName;
    }


    //복약 상태 업데이트
    public void updateStatus(Status status) {
        this.status = status;
    }

    // count 값 설정 (처방일 수와 일일 복용 횟수를 곱한 값)
    public void calculateAndSetCount(int count) {
        this.totalCount = count;
    }


    // count 감소
    public void decreaseTotalCount() {
        if (this.totalCount > 0) {
            this.totalCount--;  // 복약 횟수 감소
        }
    }

}
