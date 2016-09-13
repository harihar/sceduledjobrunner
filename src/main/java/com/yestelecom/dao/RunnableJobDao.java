package com.yestelecom.dao;

import com.yestelecom.model.RunnableJob;
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
public class RunnableJobDao {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<RunnableJob> getJobs(String jobGroupId) {
        return jdbcTemplate.query("SELECT * FROM runnable_jobs WHERE job_group = ?", new Object[]{jobGroupId}, new RowMapper<RunnableJob>() {
            @Override
            public RunnableJob mapRow(ResultSet rs, int rowNum) throws SQLException {
                return RunnableJob.builder()
                        .id(rs.getLong("id"))
                        .name(rs.getString("name"))
                        .url(rs.getString("url"))
                        .group(rs.getString("job_group"))
                        .build();
            }
        });
    }
}
