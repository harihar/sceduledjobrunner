package com.yestelecom.dao;

import com.yestelecom.model.ScheduledJob;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

/**
 * Created by harihar on 13/9/16.
 */
@Repository
public class ScheduledJobDao {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<ScheduledJob> getJobs(String jobGroupId) {
        return jdbcTemplate.query("SELECT * FROM scheduled_jobs WHERE url is not null AND job_group = ?", new Object[]{jobGroupId}, new ScheduledJobRowMapper());
    }

    public List<ScheduledJob> getAllJobs() {
        return jdbcTemplate.query("SELECT * FROM scheduled_jobs", new ScheduledJobRowMapper());
    }

    private class ScheduledJobRowMapper implements RowMapper<ScheduledJob> {
        @Override
        public ScheduledJob mapRow(ResultSet rs, int rowNum) throws SQLException {
            return ScheduledJob.builder()
                    .name(rs.getString("name"))
                    .isEnabled(rs.getBoolean("is_enabled"))
                    .status(rs.getString("status"))
                    .lastModified(rs.getTimestamp("last_modified"))
                    .lastModifiedBy(rs.getLong("last_modified_by"))
                    .url(rs.getString("url"))
                    .jobGroup(rs.getString("job_group"))
                    .build();
        }
    }
}
