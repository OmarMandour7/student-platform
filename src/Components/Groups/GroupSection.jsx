import React from 'react';
import GroupCard from './GroupCard';
import { Link } from 'react-router-dom';

const GroupSection = () => {
  const storedGroup = localStorage.getItem('studentgroup')?.toUpperCase();

  const groups = [
    { id: 'A', color: '#007BFF', path: '/groupa' },
    { id: 'B', color: '#DC3545', path: '/groupb' },
    { id: 'C', color: 'green', path: '/groupc' },
    { id: 'D', color: '#6C757D', path: '/groupd' },
  ];

  return (
    <div className="container text-center my-5 mich">
      <h1 className="mb-4">Choose Your Group</h1>

      <div className="row justify-content-center">
        {groups.map((group) => {
          const isAllowed = group.id === storedGroup;

          return (
            <div key={group.id} className="col-12 col-md-6 mb-4">
              {isAllowed ? (
                // ✅ الجروب المسموح
                <Link style={{ textDecoration: 'none' }} to={group.path}>
                  <GroupCard
                    fontColor={group.color}
                    Char={group.id}
                    style={{
                      border: '3px solid gold',
                      boxShadow: '0 0 10px gold',
                    }}
                  />
                </Link>
              ) : (
                // ❌ الجروب الممنوع - معطل
                <div style={{ cursor: 'not-allowed', opacity: 0.5 }}>
                  <GroupCard
                    fontColor={group.color}
                    Char={group.id}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GroupSection;
